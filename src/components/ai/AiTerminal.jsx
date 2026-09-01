import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, Send } from "lucide-react";
import { buildContextPrompt } from "./buildContextPrompt.js";

// IMPORTANT — read before deploying:
// This calls the Anthropic API directly from the browser. That works inside
// Claude.ai's artifact preview (which proxies the request for you), but a
// standalone deployed site cannot call api.anthropic.com from client-side
// JS — there's no API key here, and Anthropic's API doesn't allow browser
// CORS requests. Before deploying, point API_ENDPOINT at your own backend
// route (Node/Next.js/PHP, etc.) that holds your API key server-side and
// forwards the request to Anthropic.
const API_ENDPOINT = "https://api.anthropic.com/v1/messages";

export default function AiTerminal() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi, I'm Sanno's AI assistant. Ask me about his stack, his projects, or what he's good at.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, open]);

  async function handleSend() {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const nextMessages = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          messages: [
            { role: "user", content: buildContextPrompt(nextMessages) },
          ],
        }),
      });
      const data = await response.json();
      const text =
        (data?.content || [])
          .filter((block) => block.type === "text")
          .map((block) => block.text)
          .join("\n")
          .trim() ||
        "I couldn't come up with an answer just now — try asking differently.";
      setMessages([...nextMessages, { role: "assistant", content: text }]);
    } catch (err) {
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content:
            "Something went wrong reaching the AI. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 font-mono">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-3 w-[calc(100vw-2rem)] max-w-sm h-96 flex flex-col rounded-lg border border-slate-700 bg-slate-950 shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-2 px-3 py-2 bg-slate-900 border-b border-slate-700">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="ml-2 text-xs text-slate-400">
                sanno-ai — bash
              </span>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-3 py-3 space-y-3 text-sm"
            >
              {messages.map((m, i) => (
                <div key={i}>
                  <div
                    className={
                      m.role === "user" ? "text-cyan-400" : "text-emerald-400"
                    }
                  >
                    {m.role === "user" ? "visitor@portfolio:~$" : "sanno-ai:~$"}
                  </div>
                  <div className="text-slate-200 whitespace-pre-wrap leading-relaxed">
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="text-slate-500 flex items-center gap-1">
                  <span>thinking</span>
                  <span className="animate-pulse">...</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 px-3 py-2 border-t border-slate-700 bg-slate-900">
              <span className="text-cyan-400 text-sm shrink-0">$</span>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="ask about his stack..."
                className="flex-1 bg-transparent text-sm text-slate-100 placeholder-slate-600 outline-none"
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="text-cyan-400 hover:text-cyan-300 disabled:text-slate-700 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        className="flex items-center gap-2 rounded-full bg-cyan-500 text-slate-950 pl-4 pr-5 py-3 shadow-lg"
        whileHover={{ scale: 1.05, backgroundColor: "#22d3ee" }}
        whileTap={{ scale: 0.94 }}
        animate={
          open
            ? { boxShadow: "0 0 0 4px rgba(34,211,238,0.15)" }
            : { boxShadow: "0 0 0 0px rgba(34,211,238,0)" }
        }
        transition={{
          duration: 0.12,
          ease: "easeOut",
        }}
      >
        <span className="relative w-[18px] h-[18px] shrink-0">
          <AnimatePresence initial={false}>
            <motion.span
              key={open ? "close" : "terminal"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.12 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {open ? <X size={18} /> : <Terminal size={18} />}
            </motion.span>
          </AnimatePresence>
        </span>
        <span className="text-sm font-semibold">
          {open ? "close" : "ask my ai"}
        </span>
      </motion.button>
    </div>
  );
}

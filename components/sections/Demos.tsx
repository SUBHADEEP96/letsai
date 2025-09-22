"use client";

import { useCallback, useRef, useState, useTransition } from "react";
import { Send } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { requestLangGraphStream } from "@/lib/ai/langgraph";

interface AgentStep {
  title: string;
  detail: string;
}

interface DemoMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export function Demos() {
  return (
    <Section id="demos">
      <Container className="space-y-12">
        <FadeIn>
          <SectionHeading eyebrow="Live demos" label="Prototype-ready building blocks" />
        </FadeIn>
        <FadeIn delay={0.1} className="grid gap-6 lg:grid-cols-2">
          <ChatDemo />
          <LangGraphDemo />
        </FadeIn>
        <FadeIn delay={0.2}>
          <AgentsDemo />
        </FadeIn>
      </Container>
    </Section>
  );
}

function useDemoChat() {
  const [messages, setMessages] = useState<DemoMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = useCallback(async () => {
    if (!input.trim()) return;

    const userMessage: DemoMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: input,
    };

    const assistantMessage: DemoMessage = {
      id: `assistant-${Date.now()}`,
      role: "assistant",
      content: "",
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/demos/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((message) => ({
            role: message.role,
            content: message.content,
          })),
        }),
      });

      if (!response.body) {
        throw new Error("No stream");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        if (!value) continue;
        const text = decoder.decode(value, { stream: true });
        setMessages((prev) =>
          prev.map((message) =>
            message.id === assistantMessage.id ? { ...message, content: message.content + text } : message,
          ),
        );
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) =>
        prev.map((message) =>
          message.id === assistantMessage.id
            ? {
                ...message,
                content:
                  "Mock response: connect OpenAI, Bedrock, or vLLM providers by adding an API key to stream live completions.",
              }
            : message,
        ),
      );
    } finally {
      setLoading(false);
    }
  }, [input, messages]);

  return {
    messages,
    input,
    setInput,
    loading,
    sendMessage,
  };
}

function ChatDemo() {
  const { messages, input, setInput, sendMessage, loading } = useDemoChat();

  return (
    <Card className="h-full space-y-4">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--accent)]">Chat / RAG</p>
          <h3 className="text-lg font-semibold text-white">Streaming responses via Vercel AI SDK patterns</h3>
        </div>
      </header>
      <div className="h-48 overflow-y-auto rounded-2xl border border-[color:rgba(255,255,255,0.08)] bg-[color:rgba(0,0,0,0.2)] p-4 text-sm text-muted">
        {messages.length === 0 ? (
          <p className="text-muted">Ask how we build RAG experiences.</p>
        ) : (
          <ul className="space-y-3">
            {messages.map((message) => (
              <li key={message.id} className="space-y-1">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">{message.role}</p>
                <p className="whitespace-pre-wrap text-[color:var(--fg)]">{message.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <form
        className="flex gap-2"
        onSubmit={(event) => {
          event.preventDefault();
          sendMessage();
        }}
      >
        <Input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask how we evaluate agent workflows"
          aria-label="Chat prompt"
        />
        <Button type="submit" aria-label="Send chat message" disabled={loading}>
          <Send className="h-4 w-4" />
        </Button>
      </form>
      <p className="text-xs text-muted">
        Swap in OpenAI, Bedrock, or local vLLM providers by wiring the request pipeline in <code>app/api/demos/chat</code>.
      </p>
    </Card>
  );
}

function LangGraphDemo() {
  const [input, setInput] = useState("Show me how LangGraph handles fallback strategies");
  const [output, setOutput] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const abortRef = useRef<AbortController | null>(null);

  const run = useCallback(
    (value: string) => {
      if (abortRef.current) {
        abortRef.current.abort();
      }

      const controller = new AbortController();
      abortRef.current = controller;
      setOutput("");

      startTransition(() => {
        (async () => {
          try {
            for await (const chunk of requestLangGraphStream(value, controller.signal)) {
              setOutput((prev) => prev + chunk);
            }
          } catch (error) {
            console.error(error);
            setOutput("LangGraph proxy not configured. Streaming demo fallback engaged.");
          }
        })();
      });
    },
    [startTransition],
  );

  return (
    <Card className="h-full space-y-4">
      <header>
        <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--accent)]">LangGraph stream</p>
        <h3 className="text-lg font-semibold text-white">Graph executions with incremental updates</h3>
      </header>
      <Textarea
        value={input}
        onChange={(event) => setInput(event.target.value)}
        aria-label="LangGraph prompt"
        className="min-h-[120px]"
      />
      <Button type="button" onClick={() => run(input)} loading={isPending} aria-label="Run LangGraph demo">
        Run graph
      </Button>
      <div className="min-h-[140px] rounded-2xl border border-[color:rgba(255,255,255,0.08)] bg-[color:rgba(0,0,0,0.2)] p-4 text-sm text-muted">
        {output ? output : "Response stream will appear here."}
      </div>
      <p className="text-xs text-muted">
        Point <code>LANGGRAPH_SERVER_URL</code> to LangGraph Platform or your hosted runtime to proxy real executions.
      </p>
    </Card>
  );
}

function AgentsDemo() {
  const [steps, setSteps] = useState<AgentStep[]>([]);
  const [final, setFinal] = useState<string>("");
  const [pending, startTransition] = useTransition();

  const runAgent = () => {
    startTransition(() => {
      (async () => {
        setSteps([]);
        setFinal("");
        const response = await fetch("/api/demos/agents", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: "Review latest release notes and suggest QA focus." }),
        });
        const data = (await response.json()) as { steps: AgentStep[]; final: string };
        setSteps(data.steps);
        setFinal(data.final);
      })();
    });
  };

  return (
    <Card className="space-y-4">
      <header className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--accent)]">Agents SDK</p>
          <h3 className="text-lg font-semibold text-white">Tool-use orchestration</h3>
        </div>
        <Button type="button" onClick={runAgent} loading={pending} aria-label="Run agents demo">
          Trigger agent run
        </Button>
      </header>
      <ol className="space-y-3 text-sm text-muted">
        {steps.length === 0 ? <li>Click the button to simulate an OpenAI Agents workflow.</li> : null}
        {steps.map((step, index) => (
          <li key={step.title} className="rounded-2xl border border-[color:rgba(255,255,255,0.08)] bg-[color:rgba(0,0,0,0.25)] p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">
              Step {index + 1}: {step.title}
            </p>
            <p className="mt-1 whitespace-pre-wrap text-[color:var(--fg)]">{step.detail}</p>
          </li>
        ))}
      </ol>
      {final ? (
        <div className="rounded-2xl border border-[color:rgba(110,231,255,0.2)] bg-[color:rgba(0,0,0,0.35)] p-4 text-sm text-[color:var(--fg)]">
          <strong className="block text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">Final answer</strong>
          {final}
        </div>
      ) : null}
      <p className="text-xs text-muted">
        Enable the OpenAI Agents SDK by providing <code>OPENAI_API_KEY</code>; we automatically switch from a mock run to a live
        Responses API execution.
      </p>
    </Card>
  );
}

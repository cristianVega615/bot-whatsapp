export const metadata = {
  title: "Chat con QR",
  description: "Chatbot con QR",
};

export default function Botlayout({ children }: { children: React.ReactNode }) {
  return <section className="h-[100vh]">{children}</section>;
}

export const metadata = {
  title: "Login",
  description: "Chatbot con QR",
};

export default function Botlayout({ children }: { children: React.ReactNode }) {
  return <section className="h-[100vh] flex justify-center items-center">{children}</section>;
}

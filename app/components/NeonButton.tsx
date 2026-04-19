export default function NeonButton({ text }: { text: string }) {
  return (
    <button className="px-6 py-3 rounded-full bg-gradient-to-r from-neonBlue via-neonPink to-neonGreen text-black font-semibold hover:scale-105 transition shadow-neon">
      {text}
    </button>
  );
}
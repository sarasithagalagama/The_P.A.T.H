export function Footer() {
  return (
    <footer className="w-full py-8 mt-auto border-t border-neutral-800 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-2 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} The P.A.T.H. All rights reserved.
        </p>
        <p className="text-sm text-neutral-500">
          Designed & Developed by{" "}
          <span className="text-[#D4AF37] font-medium">Sarasitha Galagama</span>
        </p>
      </div>
    </footer>
  );
}

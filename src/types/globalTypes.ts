export interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  value?: string;
  type?: "button" | "submit";
  onClick: () => void;
}

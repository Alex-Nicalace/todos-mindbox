type Class = string | undefined | null;
export function cn(...classes: Class[]) {
  return classes.filter(Boolean).join(' ');
}

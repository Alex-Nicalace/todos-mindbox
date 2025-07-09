type Class = string | undefined | null | false;
export function cn(...classes: Class[]) {
  if (classes.length) return classes.filter(Boolean).join(' ');
}

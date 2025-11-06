const base = import.meta.env.BASE_URL || '/';

export function getPath(path) {
  if (!path) return base;
  if (path.startsWith('http')) return path;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`.replace(/\/+/g, '/');
}
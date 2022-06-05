export const framer_pgbar = (current: number) => {
  const initial = current * 6.666666666666667
  const animate = initial + 6.666666666666667

  return {
    initial: { width: `${initial}%` },
    animate: { width: `${animate}%` },
  }
}

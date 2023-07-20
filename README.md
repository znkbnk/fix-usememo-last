This React code project demonstrates ten intentional misuses of the useMemo hook to practice identifying and fixing common mistakes when optimizing performance with memoization.

Mistake 1: Missing deps - Forgot to pass dependency array to useMemo. Fix by passing needed deps.

Mistake 2: Missing callback - Passing non-memoized value to child component. Fix by wrapping in useCallback.

Mistake 3: Wrong dep - Passed incorrect dep to useMemo. Fix by passing correct dep that the memoized value relies on.

Mistake 4: Missing memo - Expensive render not memoized. Fix by wrapping component in useMemo.

Mistake 5: useMemo usage - Incorrect useMemo callback function. Fix by returning memoized value directly.

Mistake 6: Effect deps - Missing dependencies in useEffect deps array. Fix by adding values that the effect uses.

Mistake 7: Unneeded memo - Memoized value not used in render. Fix by removing unnecessary useMemo.

Mistake 8: Duplicate memo - Memoizing same value twice unnecessarily. Fix by removing duplicate useMemo.


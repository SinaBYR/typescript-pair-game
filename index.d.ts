declare module '*.png';
declare module '*.jpg';
declare module '*.svg';
declare global {
  interface Array<T> {
    shuffle(): Array<T>;
  }
}
declare module '*.wav' {
  const src: string;
  export default src;
}
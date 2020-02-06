declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.svg" {
  const content: string;
  export default content;
}
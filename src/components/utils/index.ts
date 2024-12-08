type args = string[];

export default function classNames(...args: args) {
  return args.join(" ");
}

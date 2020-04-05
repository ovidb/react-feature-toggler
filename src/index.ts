interface Main {
  name: string;
}

function greet({ name }: Main) {
  return `Hello ${name}`;
}

export { greet };

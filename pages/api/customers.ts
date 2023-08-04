import type { NextApiRequest, NextApiResponse } from "next";

export type Customer = {
  username: string;
  name: string;
};

const customers: Customer = { username: "1", name: "John" };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Customer>
) {
  res.status(200).json(customers);
}

// navigate to:  http://localhost:3000/api/hello

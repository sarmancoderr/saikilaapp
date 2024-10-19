import { dbPrisma } from "@/utils/sql";
import CustomersPage from './CustomersPage';

export default async function Home() {
  const customers = await dbPrisma.$queryRaw`
    SELECT * FROM \`customer\` c
    JOIN address a ON c.address_id = a.address_id
    LIMIT 20
  `
  return (
    <CustomersPage customers={customers} />
  );
}

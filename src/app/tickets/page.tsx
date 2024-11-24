import Link from 'next/link';
import { initialTickets } from '@/data';
import { ticketPath } from '@/paths';

function TicketsPage() {
  return (
    <div>
      <h2 className="uppercase text-lg font-bold mb-3">Ticket List</h2>
      {initialTickets.map((ticket) => (
        <div key={ticket.id} className="my-3">
          <h2 className="font-bold">{ticket.title}</h2>
          <p>{ticket.content}</p>
          <Link href={ticketPath(ticket.id)} className="underline">
            View
          </Link>
        </div>
      ))}
    </div>
  );
}

export default TicketsPage;

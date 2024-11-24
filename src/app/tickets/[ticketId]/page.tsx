import { initialTickets } from '@/data';

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

async function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = await params;
  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

  if (!ticket) {
    return <div>Ticket not found</div>;
  }

  return (
    <div>
      <h2 className="text-lg">Ticket</h2>
      <h4 className="text-sm">{ticket.title}</h4>
      <p className="text-sm">{ticket.content}</p>
      <p className="text-sm">{ticket.status}</p>
    </div>
  );
}

export default TicketPage;

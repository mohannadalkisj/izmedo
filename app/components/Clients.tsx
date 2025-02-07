import Image from 'next/image';

const clients = [
  { name: 'العميل 1', logo: '/placeholder.svg?height=80&width=160' },
  { name: 'العميل 2', logo: '/placeholder.svg?height=80&width=160' },
  { name: 'العميل 3', logo: '/placeholder.svg?height=80&width=160' },
  { name: 'العميل 4', logo: '/placeholder.svg?height=80&width=160' },
  { name: 'العميل 5', logo: '/placeholder.svg?height=80&width=160' },
  { name: 'العميل 6', logo: '/placeholder.svg?height=80&width=160' },
];

const Clients = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          عملاؤنا
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="col-span-1 flex justify-center items-center"
            >
              <Image
                src={client.logo || '/placeholder.svg'}
                alt={client.name}
                width={160}
                height={80}
                className="max-h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;

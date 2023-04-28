import { ServicesData } from './abstract-service-presenter'

export const fakeServiceData: ServicesData[] = [
  {
    // generate random uuid
    id: 'e49d4ea7-b1b1-4d54-944c-a454b348ca6e',
    title: 'Conserto de fechadura de porta',
    description:
      'Faço consertos de fechaduras em qualquer lugar da grande vitória',
    price: 150,
    image: require('../../../../../assets/chaveiro_servico.jpg'),
    serviceProviderId: 'b216e029-0e2f-467c-b2b5-942adca91b73',
  },
  {
    id: '3d06c78c-bfbb-4d17-9629-dcbe0c6667f0',
    title: 'Conserto de fechadura de carro',
    description: 'Faço consertos de fechaduras de carro em qualquer lugar',
    price: 200,
    image: require('../../../../../assets/chaveiro-carro_servico.jpg'),
    serviceProviderId: 'b216e029-0e2f-467c-b2b5-942adca91b73',
  },
  {
    id: 'e9ec1d42-fe9e-4920-86d7-fc132b21880b',
    title: 'Faço chave reserva',
    description: 'Faço chave reserva em qualquer lugar da grande vitória',
    price: 100,
    image: require('../../../../../assets/chaveiro-chave_servico.jpg'),
    serviceProviderId: 'b216e029-0e2f-467c-b2b5-942adca91b73',
  },
  {
    id: 'a5304490-e731-4ceb-b647-6fb1f6d9bd08',
    title: 'Faço fiação elétrica completa em residências',
    description: 'Fiações elétricas em geral',
    price: 240.64,
    image: require('../../../../../assets/eletricista_servico.png'),
    serviceProviderId: 'c416e029-0e2f-467c-b2b5-942adca91b74',
  },
]

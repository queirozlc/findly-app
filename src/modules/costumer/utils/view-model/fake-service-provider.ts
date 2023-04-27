import { ServiceProviderData } from './abstract-service-provider-presenter'

const AlexThumbnail = require('../../../../../assets/eletricista-logo_example.png')
const FabioThumbnail = require('../../../../../assets/chaveiro_logo.png')
const JoaoThumbnail = require('../../../../../assets/pintor_logo.png')

interface FakeServiceProvider extends ServiceProviderData {}

export const fakeServiceProvider: FakeServiceProvider[] = [
  {
    id: 'c416e029-0e2f-467c-b2b5-942adca91b74',
    averageRating: 4.8,
    name: 'Alex Electricista',
    thumbnail: AlexThumbnail,
    description: 'Os melhores serviços de elétrica da região',
    phoneNumber: '(27) 99245-6789',
  },
  {
    id: 'b216e029-0e2f-467c-b2b5-942adca91b73',
    averageRating: 4.9,
    name: 'Fábio Chaveiro',
    thumbnail: FabioThumbnail,
    description: 'Os melhores serviços de chaveiro da região',
    phoneNumber: '(21) 99245-8921',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    averageRating: 4.75,
    name: 'João Pintor',
    thumbnail: JoaoThumbnail,
    description: 'Os melhores serviços de pintura da região',
    phoneNumber: '(27) 99245-6789',
  },
]

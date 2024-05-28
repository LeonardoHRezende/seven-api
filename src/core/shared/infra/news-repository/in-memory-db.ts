import { NewsProps } from "../../repositories/news-repository";

export const IN_MEMORY_DB: NewsProps[] = [
  {
    id: '1',
    slug: 'valores-receber-bc',
    theme: 'ECONOMIA',
    themeColor: '#FF2D2D',
    title: 'Quem não tiver valores a receber nesta etapa poderá ter nas próximas fases, diz BC',
    coverImage: 'https://imagens.ebc.com.br/J_BJ-RTBPCNL_iw_XHX-VT4aO5U=/1600x800/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/banco_central_mcajr_abr_0104222276.jpg?itok=Wr5HSnOr',
    resume: 'Nesta primeira fase do serviço são cerca de R$ 4 bilhões a serem devolvidos. Banco Central estima que os clientes tenham a receber cerca de R$ 8 bilhões.',
    content: [
      { content: 'Banco Central libera consulta a dinheiro esquecido em bancos' },
      { content: `O Banco Central informou nesta segunda-feira (14) que quem não tiver valores a receber nesta etapa das consultas ao novo site de consulta aos recursos 'esquecidos' nos bancos poderá eventualmente ter nas próximas fases do sistema.` },
      { content: 'Muitos clientes que acessam o sistema têm recebido a mensagem para retornar a consulta em 2 de maio (veja na imagem mais abaixo).' },
      { content: `"Quem não tiver valores a receber nesta etapa poderá ter nas próximas fases", informou o BC ao ser questionado pelo g1.` },
      { content: 'Isso acontece porque, ao todo, os bancos têm R$ 8 bilhões a devolver aos clientes. Mas, nesta primeira fase, foram abertas consultas referentes à metade, R$ 4 bilhões.' },
      { content: 'Banco Central libera consulta de dinheiro ‘esquecido’ em bancos: saiba como fazer' },
      { content: 'Em 2 de maio, as consultas a uma nova fase serão abertas. O BC não informou, no entanto, se todos os R$ 4 bilhões restantes serão liberados para consultas nesta segunda fase. Em janeiro, no entanto, o BC afirmou que todos os recursos seriam liberados \'ao longo de 2022\'.' },
      { content: 'Página do BC informa que cidadão sem valores a receber atualmente poderá fazer nova consulta a partir de maio.' },

    ],
    contentHighlight: 'Quem não tiver valores a receber nesta etapa poderá ter nas próximas fases, diz BC',
    createdAt: new Date('2024-05-27T08:00:00Z'),
    updatedAt: new Date('2024-05-27T08:00:00Z'),
    author: 'Redação',
  },
  {
    id: '2',
    slug: 'reforco-alfabetizacao',
    theme: 'EDUCAÇÃO',
    themeColor: '#24538B',
    title: 'lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    coverImage: 'https://imagens.ebc.com.br/J_BJ-RTBPCNL_iw_XHX-VT4aO5U=/1600x800/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/banco_central_mcajr_abr_0104222276.jpg?itok=Wr5HSnOr',
    resume: 'lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    content: [
      { content: 'lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.' },
      { content: 'lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.' },
      { content: 'lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.' },
      { content: 'lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.' },
      { content: 'lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.' }
    ],
    contentHighlight: 'Datafolha: Após ensino remoto, 76% precisam de reforço na alfabetização',
    createdAt: new Date('2024-05-27T04:00:00Z'),
    updatedAt: new Date('2024-05-27T04:00:00Z'),
    author: 'Redação',
  },
  {
    id: '3',
    slug: 'premio-lotomania',
    theme: 'DIVERSIDADES',
    themeColor: '#248B28',
    title: 'lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    coverImage: 'https://imagens.ebc.com.br/J_BJ-RTBPCNL_iw_XHX-VT4aO5U=/1600x800/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/banco_central_mcajr_abr_0104222276.jpg?itok=Wr5HSnOr',
    resume: 'lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    content: [
      { content: 'lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.' },
      { content: 'lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.' },
      { content: 'lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.' },
      { content: 'lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.' },
      { content: 'lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.' }
    ],
    contentHighlight: 'Lotomania: com prêmio de R$ 5 milhões, veja os números sorteados hoje',
    createdAt: new Date('2024-05-27T03:00:00Z'),
    updatedAt: new Date('2024-05-27T03:00:00Z'),
    author: 'Redação',
  },
  {
    id: '4',
    slug: 'lorem-ipsum-dolor-sit-amet-4',
    theme: 'TECNOLOGIA',
    themeColor: '#FFBD14',
    title: 'Lorem ipsum dolor sit amet',
    coverImage: 'https://example.com/cover4.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: [
      { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      { content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
      { content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
    ],
    contentHighlight: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
    createdAt: new Date('2024-05-26T08:00:00Z'),
    updatedAt: new Date('2024-05-26T08:00:00Z'),
    author: 'Redação',
  },
  {
    id: '5',
    slug: 'lorem-ipsum-dolor-sit-amet-5',
    theme: 'TECNOLOGIA',
    themeColor: '#FFBD14',
    title: 'Lorem ipsum dolor sit amet',
    coverImage: 'https://example.com/cover5.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: [
      { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      { content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
      { content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
    ],
    contentHighlight: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
    createdAt: new Date('2024-05-26T08:00:00Z'),
    updatedAt: new Date('2024-05-26T08:00:00Z'),
    author: 'Redação',
  },
  {
    id: '6',
    slug: 'lorem-ipsum-dolor-sit-amet-6',
    theme: 'TECNOLOGIA',
    themeColor: '#FFBD14',
    title: 'Lorem ipsum dolor sit amet',
    coverImage: 'https://example.com/cover6.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: [
      { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      { content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
      { content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
    ],
    contentHighlight: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
    createdAt: new Date('2024-05-26T08:00:00Z'),
    updatedAt: new Date('2024-05-26T08:00:00Z'),
    author: 'Redação',
  },
  {
    id: '7',
    slug: 'lorem-ipsum-dolor-sit-amet-7',
    theme: 'TECNOLOGIA',
    themeColor: '#FFBD14',
    title: 'Lorem ipsum dolor sit amet',
    coverImage: 'https://example.com/cover7.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: [
      { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      { content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
      { content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
    ],
    contentHighlight: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
    createdAt: new Date('2024-05-26T08:00:00Z'),
    updatedAt: new Date('2024-05-26T08:00:00Z'),
    author: 'Redação',
  },
  {
    id: '8',
    slug: 'lorem-ipsum-dolor-sit-amet-8',
    theme: 'TECNOLOGIA',
    themeColor: '#FFBD14',
    title: 'Lorem ipsum dolor sit amet',
    coverImage: 'https://example.com/cover8.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: [
      { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      { content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
      { content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
    ],
    contentHighlight: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
    createdAt: new Date('2024-05-26T08:00:00Z'),
    updatedAt: new Date('2024-05-26T08:00:00Z'),
    author: 'Redação',
  },
  {
    id: '9',
    slug: 'lorem-ipsum-dolor-sit-amet-9',
    theme: 'TECNOLOGIA',
    themeColor: '#FFBD14',
    title: 'Lorem ipsum dolor sit amet',
    coverImage: 'https://example.com/cover9.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: [
      { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      { content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
      { content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
    ],
    contentHighlight: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
    createdAt: new Date('2024-05-26T08:00:00Z'),
    updatedAt: new Date('2024-05-26T08:00:00Z'),
    author: 'Redação',
  },
  {
    id: '10',
    slug: 'lorem-ipsum-dolor-sit-amet-10',
    theme: 'TECNOLOGIA',
    themeColor: '#FFBD14',
    title: 'Lorem ipsum dolor sit amet',
    coverImage: 'https://example.com/cover10.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: [
      { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      { content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
      { content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
    ],
    contentHighlight: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
    createdAt: new Date('2024-05-26T08:00:00Z'),
    updatedAt: new Date('2024-05-26T08:00:00Z'),
    author: 'Redação',
  },
  {
    id: '11',
    slug: 'lorem-ipsum-dolor-sit-amet-11',
    theme: 'TECNOLOGIA',
    themeColor: '#FFBD14',
    title: 'Lorem ipsum dolor sit amet',
    coverImage: 'https://example.com/cover11.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: [
      { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      { content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
      { content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
    ],
    contentHighlight: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
    createdAt: new Date('2024-05-26T08:00:00Z'),
    updatedAt: new Date('2024-05-26T08:00:00Z'),
    author: 'Redação',
  },
  {
    id: '12',
    slug: 'lorem-ipsum-dolor-sit-amet-12',
    theme: 'TECNOLOGIA',
    themeColor: '#FFBD14',
    title: 'Lorem ipsum dolor sit amet',
    coverImage: 'https://example.com/cover12.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: [
      { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      { content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
      { content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
    ],
    contentHighlight: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
    createdAt: new Date('2024-05-26T08:00:00Z'),
    updatedAt: new Date('2024-05-26T08:00:00Z'),
    author: 'Redação',
  },
  {
    id: '13',
    slug: 'lorem-ipsum-dolor-sit-amet-13',
    theme: 'TECNOLOGIA',
    themeColor: '#FFBD14',
    title: 'Lorem ipsum dolor sit amet',
    coverImage: 'https://example.com/cover13.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: [
      { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      { content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
      { content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
    ],
    contentHighlight: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
    createdAt: new Date('2024-05-26T08:00:00Z'),
    updatedAt: new Date('2024-05-26T08:00:00Z'),
    author: 'Redação',
  },
  {
    id: '14',
    slug: 'lorem-ipsum-dolor-sit-amet-14',
    theme: 'TECNOLOGIA',
    themeColor: '#FFBD14',
    title: 'Lorem ipsum dolor sit amet',
    coverImage: 'https://example.com/cover14.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: [
      { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      { content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
      { content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
    ],
    contentHighlight: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
    createdAt: new Date('2024-05-26T08:00:00Z'),
    updatedAt: new Date('2024-05-26T08:00:00Z'),
    author: 'Redação',
  }
];
import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items')
    .insert([
      { title: 'Lâmpadas', image: 'lampadas.svg' },
      { title: 'Pilhas e Baterias', image: 'baterias.svg' },
      { title: 'Papéis e Papelão', image: 'papeis-papelao.svg' },
      { title: 'Residuos Eletrônicos', image: 'eletronicos.svg' },
      { title: 'Resíduos Orgânicos', image: 'organicos.svg' },
      { title: 'Óleo de cozinha', image: 'oleo.svg' },
    ])
    .then(() => console.log('dados inseridos com sucesso!'))
    .catch((error) => console.log(`${error}`));
}

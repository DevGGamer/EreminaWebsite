import './ServicesPage.css'
import AdvantagesSection from './AdvantagesSection';
import ShopSection from '../../Components/ShopSection/ShopSection';

const items = [[
    {
      title: 'Консультация акушер-гинеколога',
      description: [
        'Cбор анамнеза и осмотр',
        'Выполнение комплексного обследования органов и систем, включая гинекологический осмотр',
        'Анализ и интерпретация результатов диагностических исследований',
        'Определение потребности в назначении лечения'
      ],
      price: '1200 рублей',
      image: '/GinecologProduct.jpg',
    },
    {
      title: 'Консультация сексолога',
      description: [
        'Неудовлетворенность от сексуальных отношений женщины',
        'Отсутствие полового влечения',
        'Сложности с оргазмом или его полное отсутствие',
        'Отсутствие гармонии в интимной жизни',
        'Боль во время сексуального контакта',
        'Другие проблемы.'
      ],
      price: '3000 рублей',
      image: '/SexsologProduct.jpg',
    },
  ],
  [
    {
        title: 'Консультация акушер-гинеколога',
        description: [
          'Cбор анамнеза и осмотр',
          'Выполнение комплексного обследования органов и систем, включая гинекологический осмотр',
          'Анализ и интерпретация результатов диагностических исследований',
          'Определение потребности в назначении лечения'
        ],
        price: '1200 рублей',
        image: '/GinecologProduct.jpg',
    }
  ]
]
const titles = ['Очные', 'Онлайн']

function ServicesPage()
{
    return (
        <>
            <AdvantagesSection />
            <ShopSection titles={titles} items={items} withForm = {true}/>
        </>
    );
}

export default ServicesPage;
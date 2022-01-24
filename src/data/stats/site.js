import dayjs from 'dayjs';

const data = [
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/jonsong246/personal-site/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
];

export default data;

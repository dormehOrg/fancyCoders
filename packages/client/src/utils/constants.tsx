export enum AppRoute {
  MAIN = `/`,
  LOGIN = `/login`,
  REGISTRATION = `/registration`,
  PROFILE = `/profile`,
  LEADERBOARD = `/leaderboard`,
  GAME = `/game`,
  FORUM = `/forum`,
  NOT_FOUND_PAGE = `*`,
}

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export enum ValidationType {
  Login = 'login',
  Password = 'password',
  Email = 'email',
  Phone = 'phone',
  Name = 'name',
  TopicName = 'topicName',
  ToopicDescription = 'topicDescription',
}

export const ValidationPattern = {
  login: {
    value: /^(?=.*[\D])[\w-]{3,20}$/g,
    message:
      '3-20 символов, допустимые символы: латин. буквы, цифры, дефис, подчеркивание _',
  },
  password: {
    value: /^(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z!@#-$%^_&*]{8,40}$/g,
    message: '8-40 символов, обязательно хотя бы одна заглавная буква и цифра',
  },
  email: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
    message: 'Невалидный email',
  },
  name: {
    value: /^[A-Z|А-Я|Ë][A-ZА-ЯËa-zа-яё-]+$/g,
    message:
      'Первая буква должна быть заглавной, без пробелов и без цифр, допустим дефис',
  },
  phone: {
    value: /^[\d|+][\d]{10,15}$/i,
    message: '10-15 цифр, может начинаться с плюса',
  },
  topicName: {
    value: /^(?=.*[\D\s])[\s_0-9A-ZА-ЯËa-zа-яё-]{3,50}$/g,
    message:
      '3-50 символов, допустимые символы: буквы, цифры, дефис, подчеркивание',
  },
  topicDescription: {
    value:
      /[^\u{1f44d}\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}]/gu,
    message: 'Сообщение не должно состоять только из эмодзи',
  },
};

export const GAME_DESCRIPTION =
  'Uno – одна из главных карточных игр мира, которая в последние годы завоевывает Россию.\n' +
  'Игра становится интереснее за счет специальных карт.\n' +
  'Была разработана в 1971 году парикмахером Мерлом Роббинсом в городке Реддинг, штат Огайо, США.\n' +
  'В начале 90-х Uno выкупила другая компания, и игра перестала быть феноменом только США.\n' +
  'Время игры от 10 минут. Минимум 2 игрока.\n' +
  'Uno развивает эмоциональный интеллект и учит выбирать правильную стратегию. Сначала может показаться, что игра основана на везении, зависит от того, какие карты тебе выпадут. Но потом нащупываются стратегии, и целью игры становится не только избавление от карт, но и создание ситуации, когда соперник набирает охапку карт.';

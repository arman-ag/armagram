export interface stateType {
  message: object;
  modal: object;
  profile: object;
  replyStatus: object;
  singleProfile: object;
}

type ArticleState = {
  articles: IArticle[];
};

type ArticleAction = {
  type: string;
  article: IArticle;
};

type DispatchType = (args: ArticleAction) => ArticleAction;

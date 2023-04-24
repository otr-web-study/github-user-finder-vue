export type LocalGithubUser = {
  id: number, 
  login: string,
  avatar: string, 
  name: string,
  company: string,
  blog: string,
  location: string,
  bio: string,
  twitter: string,
  repos: number,
  followers: number,
  following: number,
  created: string,
}

export type GithubUser = {
  id: number, 
  login: string,
  avatarUrl: string, 
  name: string,
  company: string,
  websiteUrl: string,
  location: string,
  bio: string,
  twitterUsername: string,
  repositories: {totalCount: number},
  followers: {totalCount: number},
  following: {totalCount: number},
  created_at: string,
};

export type GithubError = {
  message: string,
  documentation_url: string,
}
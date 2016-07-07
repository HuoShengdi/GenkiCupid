Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only:[:create]
    resource :session, only:[:create, :destroy]
    resources :profiles, param: :username, only:[:show, :update] do
      resources :essays, only: [:index, :show, :update]
      resources :answers, only: [:index, :show, :update, :create, :destroy]
      resource :filter, only:[:show, :update]
    end
    resources :questions, only:[:show, :index]
    resources :matches, param: :username, only:[:index]
  end
end

Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only:[:create, :new]
    resource :session, only:[:create, :new, :destroy]
    resources :profiles, param: :username, only:[:show, :update] do
      resources :essays, only: [:show, :update]
    end
  end
end

Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only:[:create, :new]
    resource :session, only:[:create, :new, :destroy]
    resources :profiles, only:[:show, :update]
  end
end

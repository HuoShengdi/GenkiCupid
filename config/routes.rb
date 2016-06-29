Rails.application.routes.draw do
  root to: 'static_pages#root'
  
  namespace :api, defaults: {format: :json} do
    resources :users, only:[:create, :new]
    resources :session, only:[:create, :new, :destroy]
    resources :profiles, only:[:index, :show, :update]
  end
end

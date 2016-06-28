Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only:[:create, :new]
    resources :session, only:[:create, :new, :destroy]
    resources :profiles, only:[:index, :show, :update]
  end
end

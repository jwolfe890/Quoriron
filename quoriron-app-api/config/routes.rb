Rails.application.routes.draw do
  namespace :api do
    resources :questions do
      resources :answers
    end
  end
end
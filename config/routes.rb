Rails.application.routes.draw do
  root 'home#index'
  get 'projects/index'
  get 'projects', to: 'projects#index'
end

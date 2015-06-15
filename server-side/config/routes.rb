Rails.application.routes.draw do

  resources :users do
    resources :reflections
  end

  get '/sign_in' => 'sessions#new'
  post '/sign_in' => 'sessions#create'
  get '/sign_out' => 'sessions#destroy'

  get '/sign_up' => 'users#new'

  get '/home' => 'index#home'

  root 'index#index'

end

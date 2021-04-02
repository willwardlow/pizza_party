class NeighborhoodsController < ApplicationController
  before_action :set_neighborhood, only: [:show ]

  # GET /neighborhoods
  def index
    @neighborhoods = Neighborhood.all

    render json: @neighborhoods
  end

  # GET /neighborhoods/1
  def show
    render json: @neighborhood, include: :users
  end

  #no need to create or delete a neighborhood since they are hard coded in seeds
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_neighborhood
      @neighborhood = Neighborhood.find(params[:id])
    end

end

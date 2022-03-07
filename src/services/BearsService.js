import { AppState } from "../AppState"
import { logger } from "../utils/Logger"



class BearsService{
  feedBear(id){
  logger.log('going to feed the bear now', id)
  let bear = AppState.bears.find(b => b.id == id)
  bear.hunger += 10
  }

  exerciseBear(id){
    let bear = AppState.bears.find(b => b.id == id)
    bear.hunger -= 50
  }
}

export const bearsService = new BearsService()

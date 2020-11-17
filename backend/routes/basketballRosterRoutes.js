import {
  addNewPlayer,
  deletePlayer,
  getPlayers,
  getPlayerWithID,
  updatePlayer,
} from "../controllers/playerControllers";

const routes = (app) => {
  app
    .route("/players")
    // GET endpoint
    .get(getPlayers)
    // POST endpoint
    .post(addNewPlayer);

  app
    .route("/players/:PlayerId")
    // GET player endpoint
    .get(getPlayerWithID)
    // Update player by ID endpoint
    .put(updatePlayer)
    // delete player by ID endpoint
    .delete(deletePlayer);
};

export default routes;

const Game = require('../models/game');

exports.index = async (req, res, next) => {
  try {
    const games = await Game.find();

    res.status(200).json(games);
  } catch (error) {
    next(error);
  }
};

exports.show = async (req, res, next) => {
  try {
    const game = await Game.findById(req.params.id);

    res.status(200).json(game);
  } catch (error) {
    next(error);
  }
}

exports.create = async (request, response, next) => {
  try{
    const { title, publisher, rating } = request.body;
    const qt = await Game.create({
        title: title,
        publisher: publisher,
        rating: rating
    });

response.status(200).json({ message: "YUSS! Game file was created successfully", game: qt });
}catch (error) {
    next(error);
}
};

exports.update = async (req, res, next) => {
  try {
    const { _id, title, publisher, rating } = req.body;
    
    const qt = await Game.findOneAndUpdate({ _id: _id }, {
      title,
      publisher,
      rating
    });

    res.status(200).json({ message: "Game was updated successfully", game: qt });
  } catch (error) {
    next(error);
  }
};

exports.destroy = async (request, response, next) => {
  try{
    const { _id } = request.body;
    await Game.findOneAndDelete({ _id: _id});

    response.status(200).json({ message: "YUSS! The Game file was destroyed successfully"});
}catch (error) {
    next(error);
}
};
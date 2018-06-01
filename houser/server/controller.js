module.exports = {
    getHouses: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_houses().then(houses => res.status(200).send(houses))
        .catch(() => res.status(500).send())
    },
    postHouse: (req, res) => {
        const dbInstance = req.app.get('db');
        const { name, address, city, stateAbv, zip, img, mortgage, rent } = req.body;

        dbInstance.create_house([ name, address, city, stateAbv, zip, img, mortgage, rent ])
        .then(() => res.status(200).send('Posted'))
        .catch(() => res.status(500).send('Error'));
    },
    deleteHouse: (req, res) => {
        const dbInstance = req.app.get('db');
        let {id} = req.params;

        dbInstance.delete_house([id])
        .then(() => res.status(200).send('Deleted'))
        .catch(() => res.status(500).send('Error'))
    },

}
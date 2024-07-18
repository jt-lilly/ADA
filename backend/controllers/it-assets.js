const itAssetSvc = require('../dao/it-assets');

const getAllItAssets = async(req, res) => {
    try {
        const result = await itAssetSvc.getAllITAssets();

        console.log(JSON.stringify(result))

        if(result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'resource not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Internal service error' });
    }
};

module.exports = {
    getAllItAssets,
}
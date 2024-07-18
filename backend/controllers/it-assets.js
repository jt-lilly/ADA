const itAssetSvc = require('../dao/it-assets');

const getAllItAssets = async (req, res) => {
    try {
        const assets = await itAssetSvc.getAllITAssets();
        res.status(200).json({ data: assets });
    }
    catch (e) {
        console.log(e);
        res.json({ status: 501, msg: `${e} ` });
    }
};

module.exports = {
    getAllItAssets,
}
var CollectionViewDataSourceAndDelegate = Hyperloop.defineClass('CollectionViewDataSourceAndDelegate', 'NSObject', ['UICollectionViewDataSource', 'UICollectionViewDelegate', 'UICollectionViewDelegateFlowLayout']);

CollectionViewDataSourceAndDelegate.addMethod({
	selector: 'collectionView:numberOfItemsInSection:',
	instance: true,
	arguments: ['UICollectionView', 'long'],
	returnType: 'long',
	callback: (collectionView, indexPath) => {
		if (this.numberOfCells) {
			return this.numberOfCells(collectionView, indexPath);
		}
		return null;
	}
});
    
CollectionViewDataSourceAndDelegate.addMethod({
	selector: 'collectionView:cellForItemAtIndexPath:',
	instance: true,
	arguments: ['UICollectionView', 'NSIndexPath'],
	returnType: 'UICollectionViewCell',
	callback: (collectionView, indexPath) => {
		if (this.cellForItem) {
			return this.cellForItem(collectionView, indexPath);
		}
		return null;
	}
});
    
CollectionViewDataSourceAndDelegate.addMethod({
    selector: 'collectionView:didSelectItemAtIndexPath:',
    instance: true,
    arguments: ['UICollectionView', 'NSIndexPath'],
    callback: (collectionView, indexPath) => {
        if (this.didSelectItem) {
            this.didSelectItem(collectionView, indexPath);
        }
    }
});

module.exports = CollectionViewDataSourceAndDelegate;

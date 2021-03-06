declare namespace openfl.display {
	
	/**
	 * The StageQuality class provides values for the `Stage.quality`
	 * property.
	 */
	export enum StageQuality {
		
		/**
		 * Specifies very high rendering quality: graphics are anti-aliased using a 4
		 * x 4 pixel grid and bitmaps are always smoothed.
		 */
		BEST = 0,
		
		/**
		 * Specifies high rendering quality: graphics are anti-aliased using a 4 x 4
		 * pixel grid, and bitmaps are smoothed if the movie is static.
		 */
		HIGH = 1,
		
		/**
		 * Specifies low rendering quality: graphics are not anti-aliased, and
		 * bitmaps are not smoothed.
		 */
		LOW = 2,
		
		/**
		 * Specifies medium rendering quality: graphics are anti-aliased using a 2 x
		 * 2 pixel grid, but bitmaps are not smoothed. This setting is suitable for
		 * movies that do not contain text.
		 */
		MEDIUM = 3
		
	}
	
}


export default openfl.display.StageQuality;
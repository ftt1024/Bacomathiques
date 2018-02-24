package fr.bacomathiques.utils;

import android.os.Build;
import android.text.Html;
import android.text.Spanned;

public class Utils {

	/**
	 * Creates a Spanned from a HTML source.
	 *
	 * @param source The HTML source.
	 *
	 * @return The Spanned.
	 */

	public static Spanned fromHtml(final String source) {
		if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
			return Html.fromHtml(source, Html.FROM_HTML_MODE_LEGACY);
		}
		else {
			return Html.fromHtml(source);
		}
	}

}
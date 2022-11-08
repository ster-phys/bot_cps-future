/*
A library that provides Bot Launcher Managed by bot_cps

The GNU General Public License v3.0 (GPL-3.0)

Copyright (C) 2021-present ster <ster.physics@gmail.com>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

*/

function doGet(e){
    var p = e.parameter;
    var translatedText = LanguageApp.translate(p.text, "", p.lang);
    var body;

    if (translatedText){
        body = {
          code: 200,
          text: translatedText
        };
    } else{
        body = {
          code: 400,
          text: "Bad Request"
        };
    }

    var response = ContentService.createTextOutput();
    response.setMimeType(ContentService.MimeType.JSON);
    response.setContent(JSON.stringify(body));
    return response;
}

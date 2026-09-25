const CACHE_NAME = "vinigeoclima-ba-v1";

const STATIC_FILES = [
    "./",
    "./index.html",
    "./manifest.json"
];

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(cache =>
                cache.addAll(STATIC_FILES)
            )
            .then(() =>
                self.skipWaiting()
            )

    );

});


self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys()
            .then(keys =>

                Promise.all(

                    keys
                        .filter(
                            key =>
                                key !== CACHE_NAME
                        )
                        .map(
                            key =>
                                caches.delete(key)
                        )

                )

            )
            .then(() =>
                self.clients.claim()
            )

    );

});


self.addEventListener("fetch", event => {

    if (
        event.request.method !== "GET"
    ) {
        return;
    }


    const requestURL =
        new URL(
            event.request.url
        );


    /*
       APIs externas não são colocadas
       no cache do site.
       Assim evitamos dados meteorológicos
       antigos.
    */

    if (
        requestURL.origin !==
        self.location.origin
    ) {
        return;
    }


    /*
       HTML:
       primeiro tenta a internet.

       Isso evita que uma versão antiga
       do site fique presa no celular.
    */

    if (
        event.request.mode ===
        "navigate"
    ) {

        event.respondWith(

            fetch(event.request)
                .then(response => {

                    const copy =
                        response.clone();

                    caches.open(
                        CACHE_NAME
                    ).then(cache => {

                        cache.put(
                            event.request,
                            copy
                        );

                    });

                    return response;

                })
                .catch(() =>

                    caches.match(
                        "./index.html"
                    )

                )

        );

        return;

    }


    /*
       Arquivos locais:
       cache primeiro,
       internet depois.
    */

    event.respondWith(

        caches.match(
            event.request
        )
        .then(cached => {

            if (cached) {
                return cached;
            }


            return fetch(
                event.request
            )
            .then(response => {

                const copy =
                    response.clone();

                caches.open(
                    CACHE_NAME
                ).then(cache => {

                    cache.put(
                        event.request,
                        copy
                    );

                });

                return response;

            });

        })

    );

});

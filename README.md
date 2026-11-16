# Sha1ToMd5

A tiny web tool that turns the SHA-1 fingerprint of your Android signing key into the key hash Facebook Login asks for. Paste the SHA-1, copy the key hash, done. No logging code in your app, no `openssl` commands.

**Live:** https://p32929.github.io/Sha1ToMd5/

## Why this exists

When you set up Facebook Login in an Android app, Facebook asks for a **key hash**. Your Google Play release signing key gives you a SHA-1 fingerprint, but Facebook's field expects the same key as base64 (the page calls it "MD5", but it is really the base64 key hash). This converts one to the other so Facebook Login works on your Play-signed build.

I made it in 2019. Back then, the usual way to get the key hash was to add logging code to the app and read it from the log. Then I found out the key hash is just the SHA-1 in another format, so I made this page. It is an old tool and is kept as it was.

## How to use

1. Open the [live tool](https://p32929.github.io/Sha1ToMd5/)
2. Paste your release **SHA-1** value
3. Copy the converted value into your Facebook app's Android key-hash field

It all runs in your browser — nothing is sent anywhere.



## License

MIT License — Copyright (c) 2020 Fayaz Bin Salam. See [LICENSE](LICENSE) for the full text.

## Contributing

Contributions are very welcome, thank you! Before you start on a pull request, please open an issue and tell me what you would like to add or change. That way we can agree on it first, and your time is not wasted on something that might not fit. Thanks for helping make Sha1ToMd5 better.

## Share

<a href="https://p32929.github.io/share/?repo=Sha1ToMd5"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/share-dark.svg"><img src="https://p32929.github.io/readme/share-light.svg" alt="Share this with your friends in just a click" width="420"></picture></a>

## Support

<a href="https://p32929.github.io/support/"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/support-dark.svg"><img src="https://p32929.github.io/readme/support-light.svg" alt="If you like my works and want to support me, feel free to support" width="420"></picture></a>

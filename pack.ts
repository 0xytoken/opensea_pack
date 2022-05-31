import * as coda from "@codahq/packs-sdk";
export const pack = coda.newPack();

const attributionImage = coda.makeAttributionNode({ type: coda.AttributionNodeType.Image, imageUrl: "https://static.coingecko.com/s/coingecko-branding-guide-4f5245361f7a47478fa54c2c57808a9e05d31ac7ca498ab189a3827d6000e22b.png", anchorUrl: "www.coingecko.com" });
const attributionText = coda.makeAttributionNode({ type: coda.AttributionNodeType.Text, text: "Powered by CoinGecko" });
const attributionLink = coda.makeAttributionNode({ type: coda.AttributionNodeType.Link, anchorUrl: "www.coingecko.com", anchorText: "Powered by CoinGecko" });

// The domain of the Opensea API so that we can make the requests. 
pack.addNetworkDomain("api.opensea.io");
let collectionSchema = coda.makeObjectSchema({
  displayProperty: "name",
  idProperty: "slug",
  featuredProperties: [
    "image_url",
    "description",
    "total_supply",
    "one_day_volume",
    "one_day_change",
    "one_day_sales",
    "seven_day_volume",
    "seven_day_change",
    "seven_day_sales",
    "thirty_day_volume",
    "thirty_day_change",
    "thirty_day_sales",
    "total_volume",
    "total_change",
    "total_sales",
    "floor_price",
    "dev_buyer_fee_basis_points",
    "dev_seller_fee_basis_points",
    "opensea_buyer_fee_basis_points",
    "opensea_seller_fee_basis_points",
    "average_price"],
  makeAttribution: "Powered by CoinGecko",
  description: "description_en",
  identity: {
    attribution: [
      attributionImage,
      attributionText,
      attributionLink
    ],
    name: "NFTCollections",
    type: coda.ValueType.Object,
  },
  properties: {
    total_supply: { type: coda.ValueType.Number, },
    one_day_change: { type: coda.ValueType.Number, codaType: coda.ValueHintType.Percent },
    one_day_sales: { type: coda.ValueType.Number, },
    one_day_volume: { type: coda.ValueType.Number, codaType: coda.ValueHintType.Currency },
    seven_day_volume: { type: coda.ValueType.Number, codaType: coda.ValueHintType.Currency },
    seven_day_change: { type: coda.ValueType.Number, codaType: coda.ValueHintType.Percent },
    seven_day_sales: { type: coda.ValueType.Number },
    thirty_day_volume: { type: coda.ValueType.Number, codaType: coda.ValueHintType.Currency },
    thirty_day_change: { type: coda.ValueType.Number, codaType: coda.ValueHintType.Percent },
    thirty_day_sales: { type: coda.ValueType.Number },
    total_volume: { type: coda.ValueType.Number, codaType: coda.ValueHintType.Currency },
    total_change: { type: coda.ValueType.Number, codaType: coda.ValueHintType.Percent },
    total_sales: { type: coda.ValueType.Number },
    floor_price: { type: coda.ValueType.Number, codaType: coda.ValueHintType.Currency },
    average_price: { type: coda.ValueType.Number, codaType: coda.ValueHintType.Currency },
    editors: {
      type: coda.ValueType.Array, fromKey: "editors", items:
        { type: coda.ValueType.String },
    },
    payment_tokens: {
      type: coda.ValueType.Array, fromKey: "payment_tokens", items:
      {
        type: coda.ValueType.Object,
        properties: {
          0: {
            type: coda.ValueType.Object, fromKey: "0",
            properties: {
              id: { type: coda.ValueType.Number, fromKey: "id" },
              sym: { type: coda.ValueType.String, fromKey: "symbol" },
              address: { type: coda.ValueType.String, fromKey: "address" },
              image_url: { type: coda.ValueType.String, fromKey: "image_url", codaType: coda.ValueHintType.ImageAttachment },
              name: { type: coda.ValueType.String, fromKey: "name" },
              decimals: { type: coda.ValueType.Number, fromKey: "decimals" },
              eth_price: { type: coda.ValueType.Number, fromKey: "eth_price", codaType: coda.ValueHintType.Currency },
              usd_price: { type: coda.ValueType.Number, fromKey: "usd_price", codaType: coda.ValueHintType.Currency },
            }
          }, 1: {
            type: coda.ValueType.Object, fromKey: "1",
            properties: {
              id: { type: coda.ValueType.Number, fromKey: "id" },
              symbol: { type: coda.ValueType.String, fromKey: "symbol" },
              address: { type: coda.ValueType.String, fromKey: "address" },
              image_url: { type: coda.ValueType.String, fromKey: "image_url", codaType: coda.ValueHintType.ImageAttachment },
              name: { type: coda.ValueType.String, fromKey: "name" },
              decimals: { type: coda.ValueType.Number, fromKey: "decimals" },
              eth_price: { type: coda.ValueType.Number, fromKey: "eth_price", codaType: coda.ValueHintType.Currency },
              usd_price: { type: coda.ValueType.Number, fromKey: "usd_price", codaType: coda.ValueHintType.Currency },
            }
          }, 2: {
            type: coda.ValueType.Object, fromKey: "2",
            properties: {
              id: { type: coda.ValueType.Number, fromKey: "id" },
              symbol: { type: coda.ValueType.String, fromKey: "symbol" },
              address: { type: coda.ValueType.String, fromKey: "address" },
              image_url: { type: coda.ValueType.String, fromKey: "image_url", codaType: coda.ValueHintType.ImageAttachment },
              name: { type: coda.ValueType.String, fromKey: "name" },
              decimals: { type: coda.ValueType.Number, fromKey: "decimals" },
              eth_price: { type: coda.ValueType.Number, fromKey: "eth_price", codaType: coda.ValueHintType.Currency },
              usd_price: { type: coda.ValueType.Number, fromKey: "usd_price", codaType: coda.ValueHintType.Currency },
            }
          }, 3: {
            type: coda.ValueType.Object, fromKey: "3",
            properties: {
              id: { type: coda.ValueType.Number, fromKey: "id" },
              symbol: { type: coda.ValueType.String, fromKey: "symbol" },
              address: { type: coda.ValueType.String, fromKey: "address" },
              image_url: { type: coda.ValueType.String, fromKey: "image_url", codaType: coda.ValueHintType.ImageAttachment },
              name: { type: coda.ValueType.String, fromKey: "name" },
              decimals: { type: coda.ValueType.Number, fromKey: "decimals" },
              eth_price: { type: coda.ValueType.Number, fromKey: "eth_price", codaType: coda.ValueHintType.Currency },
              usd_price: { type: coda.ValueType.Number, fromKey: "usd_price", codaType: coda.ValueHintType.Currency },
            }
          },
        },
      },
    },
    primary_asset_contracts: {
      type: coda.ValueType.Array, fromKey: "primary_asset_contracts", items:
      {
        type: coda.ValueType.Object,
        properties: {
          0: {
            type: coda.ValueType.Object, fromKey: "0",
            properties: {
              address: { type: coda.ValueType.String, fromKey: "address" },
              asset_contract_type: { type: coda.ValueType.String, fromKey: "asset_contract_type" },
              created_date: { type: coda.ValueType.String, fromKey: "created_date" },
              name: { type: coda.ValueType.String, fromKey: "name" },
              nft_version: { type: coda.ValueType.String, fromKey: "nft_version" },
              owner: { type: coda.ValueType.Number, fromKey: "owner" },
              schema_name: { type: coda.ValueType.String, fromKey: "schema_name" },
              symbol: { type: coda.ValueType.String, fromKey: "symbol" },
              total_supply: { type: coda.ValueType.String, fromKey: "total_supply" },
              description: { type: coda.ValueType.String, fromKey: "description" },
              external_link: { type: coda.ValueType.String, fromKey: "external_link", codaType: coda.ValueHintType.Url },
              image_url: { type: coda.ValueType.String, fromKey: "image_url", codaType: coda.ValueHintType.ImageAttachment },
              default_to_fiat: { type: coda.ValueType.Boolean, fromKey: "default_to_fiat" },
              dev_buyer_fee_basis_points: { type: coda.ValueType.Number, fromKey: "dev_buyer_fee_basis_points" },
              dev_seller_fee_basis_points: { type: coda.ValueType.Number, fromKey: "dev_seller_fee_basis_points" },
              only_proxied_transfers: { type: coda.ValueType.Boolean, fromKey: "only_proxied_transfers" },
              opensea_buyer_fee_basis_points: { type: coda.ValueType.Number, fromKey: "opensea_buyer_fee_basis_points" },
              opensea_seller_fee_basis_points: { type: coda.ValueType.Number, fromKey: "opensea_seller_fee_basis_points" },
              buyer_fee_basis_points: { type: coda.ValueType.Number, fromKey: "buyer_fee_basis_points" },
              seller_fee_basis_points: { type: coda.ValueType.Number, fromKey: "seller_fee_basis_points" },
              payout_address: { type: coda.ValueType.String, fromKey: "payout_address" },
            }
          },
        },
      },
    },
    stats: {
      type: coda.ValueType.Object, fromKey: "stats",
      properties: {
        one_day_volume: { type: coda.ValueType.Number, fromKey: "one_day_volume", codaType: coda.ValueHintType.Currency },
        one_day_change: { type: coda.ValueType.Number, fromKey: "one_day_change", codaType: coda.ValueHintType.Percent },
        one_day_sales: { type: coda.ValueType.Number, fromKey: "one_day_sales" },
        one_day_average_price: { type: coda.ValueType.Number, fromKey: "one_day_average_price", codaType: coda.ValueHintType.Currency },
        seven_day_volume: { type: coda.ValueType.Number, fromKey: "seven_day_volume", codaType: coda.ValueHintType.Currency },
        seven_day_change: { type: coda.ValueType.Number, fromKey: "seven_day_change", codaType: coda.ValueHintType.Percent },
        seven_day_sales: { type: coda.ValueType.Number, fromKey: "seven_day_sales" },
        seven_day_average_price: { type: coda.ValueType.Number, fromKey: "seven_day_average_price", codaType: coda.ValueHintType.Currency },
        thirty_day_volume: { type: coda.ValueType.Number, fromKey: "thirty_day_volume", codaType: coda.ValueHintType.Currency },
        thirty_day_change: { type: coda.ValueType.Number, fromKey: "thirty_day_change", codaType: coda.ValueHintType.Percent },
        thirty_day_sales: { type: coda.ValueType.Number, fromKey: "thirty_day_sales" },
        thirty_day_average_price: { type: coda.ValueType.Number, fromKey: "thirty_day_average_price", codaType: coda.ValueHintType.Currency },
        total_volume: { type: coda.ValueType.Number, fromKey: "total_volume", codaType: coda.ValueHintType.Currency },
        total_sales: { type: coda.ValueType.Number, fromKey: "total_sales" },
        total_supply: { type: coda.ValueType.Number, fromKey: "total_supply" },
        count: { type: coda.ValueType.Number, fromKey: "count" },
        num_owners: { type: coda.ValueType.Number, fromKey: "num_owners" },
        average_price: { type: coda.ValueType.Number, fromKey: "average_price", codaType: coda.ValueHintType.Currency },
        num_reports: { type: coda.ValueType.Number, fromKey: "num_reports" },
        market_cap: { type: coda.ValueType.Number, fromKey: "market_cap", codaType: coda.ValueHintType.Currency },
        floor_price: { type: coda.ValueType.Number, fromKey: "floor_price", codaType: coda.ValueHintType.Currency },
      }
    },
    banner_image_url: { type: coda.ValueType.String, fromKey: "banner_image_url", codaType: coda.ValueHintType.ImageAttachment },
    created_date: { type: coda.ValueType.String, fromKey: "created_date", codaType: coda.ValueHintType.Date },
    default_to_fiat: { type: coda.ValueType.Boolean, fromKey: "default_to_fiat" },
    description: { type: coda.ValueType.String, fromKey: "description" },
    dev_buyer_fee_basis_points: { type: coda.ValueType.String, fromKey: "dev_buyer_fee_basis_points" },
    dev_seller_fee_basis_points: { type: coda.ValueType.String, fromKey: "dev_seller_fee_basis_points" },
    discord_url: { type: coda.ValueType.String, fromKey: "discord_url", codaType: coda.ValueHintType.Url },
    display_data: {
      type: coda.ValueType.Object, fromKey: "display_data",
      properties: {
        card_display_style: { type: coda.ValueType.String, fromKey: "card_display_style" },
      }
    },
    external_url: { type: coda.ValueType.String, fromKey: "external_url", codaType: coda.ValueHintType.Url },
    featured: { type: coda.ValueType.Boolean, fromKey: "featured" },
    featured_image_url: { type: coda.ValueType.String, fromKey: "featured_image_url", codaType: coda.ValueHintType.Url },
    hidden: { type: coda.ValueType.Boolean, fromKey: "hidden" },
    safelist_request_status: { type: coda.ValueType.String, fromKey: "safelist_request_status" },
    image_url: { type: coda.ValueType.String, codaType: coda.ValueHintType.ImageAttachment, fromKey: "image_url" },
    is_subject_to_whitelist: { type: coda.ValueType.Boolean, fromKey: "is_subject_to_whitelist" },
    large_image_url: { type: coda.ValueType.String, fromKey: "large_image_url", codaType: coda.ValueHintType.ImageAttachment },
    name: { type: coda.ValueType.String, fromKey: "name" },
    only_proxied_transfers: { type: coda.ValueType.Boolean, fromKey: "only_proxied_transfers" },
    opensea_buyer_fee_basis_points: { type: coda.ValueType.String, fromKey: "opensea_buyer_fee_basis_points" },
    opensea_seller_fee_basis_points: { type: coda.ValueType.String, fromKey: "opensea_seller_fee_basis_points" },
    payout_address: { type: coda.ValueType.String, fromKey: "payout_address" },
    require_email: { type: coda.ValueType.Boolean, fromKey: "require_email" },
    slug: { type: coda.ValueType.String, fromKey: "slug" },
    twitter_username: { type: coda.ValueType.String, fromKey: "twitter_username" },
    is_nsfw: { type: coda.ValueType.Boolean, fromKey: "is_nsfw" },
  },
});


pack.addFormula({
  name: "GetOpenSeaCollection",
  schema: collectionSchema,
  description: "Returns extensive information on an OpenSea collection.",
  parameters: [
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: "Collection Name",
      description: "Usually, the collection name is lowercase and without spaces. 'Bored Ape Yacht Club' --> 'boredapeyachtclub'.",
    }),
  ],
  resultType: coda.ValueType.Object,
  execute: async function ([collectionName], context) {
    let url = "https://api.opensea.io/api/v1/collection/" + encodeURIComponent(collectionName);
    // The fetcher's fetch method makes the request. The await keyword is used
    // to wait for the API's response before continuing on through the code.
    let response = await context.fetcher.fetch({
      method: "GET",
      url: url,
    });
    let collection = response.body.collection;
    return collection;
  },
});


pack.addSyncTable({
  name: "NFTCollections",
  description: "Requires an OpenSea API token. Get all NFTs of an Wallet Address.",
  identityName: "NFTCollections",
  schema: collectionSchema,
  formula: {
    name: "Wallet",
    description: "NFTs of Wallet.",
    parameters: [
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "API Token",
        optional: false,
        description: "The wallet address you want the NFTs to be displayed of.",
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "Wallet Address",
        optional: true,
        description: "The wallet address you want the NFTs to be displayed of.",
      }),
    ],
    execute: async function ([walletAddress, apiKey], context) {
      // Get the page to start from.
      let page = (context.sync.continuation?.page as number) || 1;

      // Fetch a list of coins from the CoinGecko API.
      let url = coda.withQueryParams("https://api.opensea.io/api/v1/assets", {
        order_direction: 'desc',
        owner: walletAddress
      });

      let response = await context.fetcher.fetch({
        method: "GET",
        url: url,
        headers: { "X-API-KEY": apiKey }
      });

      let collections = response.body;

      // If there were some results, re-run this formula for the next page.
      let continuation;
      if (collections.length > 0) {
        continuation = { page: page + 1 };
      }

      // Reformatting the collections to the table.
      let parsedCollections;
      Object.keys(collections).forEach(function (key: string, index: Number) {
        parsedCollections.append(makeImportantPropertiesTopLevel(collections[key]));
      });

      // Return the NFTs and the continuation (if any).
      return {
        result: parsedCollections,
        continuation: continuation,
      };
    },
  },
});

function makeImportantPropertiesTopLevel(collection) {
  // Adding nested properties to be top-level so that they can be referenced as 'featuredProperties'.
  collection["name"] = collection["stats"]["count"];
  collection["count"] = collection["stats"]["count"];
  collection["one_day_volume"] = collection["stats"]["one_day_volume"];
  collection["one_day_change"] = collection["stats"]["one_day_change"];
  collection["one_day_sales"] = collection["stats"]["one_day_sales"];
  collection["seven_day_volume"] = collection["stats"]["seven_day_volume"];
  collection["seven_day_change"] = collection["stats"]["seven_day_change"];
  collection["seven_day_sales"] = collection["stats"]["seven_day_sales"];
  collection["thirty_day_volume"] = collection["stats"]["thirty_day_volume"];
  collection["thirty_day_change"] = collection["stats"]["thirty_day_change"];
  collection["thirty_day_sales"] = collection["stats"]["thirty_day_sales"];
  collection["total_volume"] = collection["stats"]["total_volume"];
  collection["total_change"] = collection["stats"]["total_change"];
  collection["total_sales"] = collection["stats"]["total_sales"];
  collection["floor_price"] = collection["stats"]["floor_price"];
  collection["average_price"] = collection["stats"]["average_price"];
  collection["total_supply"] = collection["stats"]["total_supply"];
  return collection;
}
module Jekyll
    module AssetFilter
        def files(input)
            Dir[ File.join(input, '**', '*') ].reject { |f| File.directory? f }.sort_by { |f| File.mtime(f) }
        end
    end
end

Liquid::Template.register_filter(Jekyll::AssetFilter)